//@flow
import React from 'react';
import Accordion from './Accordion';
// import './styles.css';

export default function Faq() {
    const quastions = [
        {
            quastion: 'quastion 1',
            answear:
                'Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel             velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus leoleoleoleoleoleoleo pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna'
        },
        {
            quastion: 'quastion 2',
            answear:
                'Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel             velit tempor aliquam eget eget enim. Proior sit amet, consectetur adipiscing elit. Pellentesque vel velit tempor aliquam eget eget enim. Proin or sit amet, consectetur adipiscing elit. Pellentesque vel velit tempor aliquam eget eget enim. Proin n cursus eleifend pretium. Aliquam cursus leoleoleoleoleoleoleo pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna'
        },
        {
            quastion:
                'quastion 3 sit amet, consectetur adipiscing elit. Pellentesque vel             velit tempor aliquam eget ege',
            answear: 'answear 3'
        },
        {
            quastion: 'quastion 4',
            answear: 'answear 4'
        }
    ];

    return (
        <div>
            <dl>
                {quastions.map((el, index) => {
                    return (
                        <Accordion key={index} elIndex={index} element={el} />
                    );
                })}
            </dl>
        </div>
    );
}
