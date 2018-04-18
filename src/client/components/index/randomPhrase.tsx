import * as React from 'React';

const phrases = [
    'Connecting strangers since 2018.',
    'Social network for sharing images.',
    'Instagram is nothing against us.',
    'Better than YouTube.',
    'We don\'t sell your personal data. Wait, we don\'t even have your personal information.',
    ':)'
];

export const RandomPhrase : React.StatelessComponent<{}> = () => {
    return (<p>{ phrases[Math.floor(Math.random() * phrases.length)] }</p>);
}

