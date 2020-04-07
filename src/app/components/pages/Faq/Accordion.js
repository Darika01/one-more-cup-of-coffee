//@flow
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Collapse, UnmountClosed } from 'react-collapse';

import './styles.css';

type Props = {
    element: {
        quastion: string,
        answear: string
    },
    elIndex: number
};

export default function Accordion(props: Props) {
    const { element, elIndex } = props;

    const [IsExpanded, setIsExpanded] = useState(false);

    const toggleAnswear = () => {
        setIsExpanded(!IsExpanded);
    };

    return (
        <div className="accordion">
            <div>
                <button
                    aria-expanded={IsExpanded}
                    aria-controls={elIndex}
                    onClick={toggleAnswear}
                    className="answearBtn"
                >
                    {element.quastion}
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        className={clsx('icon', IsExpanded && 'animateIcon')}
                    />
                </button>
            </div>
            <Collapse isOpened={IsExpanded}>
                <div id={'faq' + elIndex} className="answear">
                    <>{element.answear}</>
                </div>
            </Collapse>

            {/* <CSSTransition
                in={IsExpanded}
                timeout={300}
                className="collapse"
                unmountOnExit
                // onEnter={() => setIsExpanded(true)}
                // onExited={() => setIsExpanded(false)}
            >
                <p id={'faq' + elIndex} ref={ref}>
                    {element.answear}
                </p>
            </CSSTransition> */}
        </div>
    );
}
