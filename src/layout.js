import React from 'react';
import shortid from 'shortid';

export default function Layout(props) {
    let { children = false } = props;
    const { component = {} } = props;
    const { params = {} } = component;
    const { layoutClassName = '' } = params;

    if (children !== false) {
        children = React.Children.map(children, (child) => {
            return (
                <div className="switch-component-wrapper" key={shortid.generate()}>
                    {React.cloneElement(child, {
                        parentProps: props,
                        layoutClassName,
                    })}
                </div>
            );
        });
    } else {
        children = '';
    }

    return <>{children}</>;
}
