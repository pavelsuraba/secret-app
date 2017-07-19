import React, { Component } from 'react';
import Message from '../components/Message';
import Form from '../components/Form';

export default ({ value, _setGlobalstate, _handleSubmit }) => {
    const update = (value) => {
        _setGlobalstate(value);
    }

    const submit = () => {
        _handleSubmit(value);
    }

    return (
        <div>
            <Message>Ahoj Libore, to je let, co jsme se neviděli, viď?:-) Je to pro mě celý hrozně složitý a&nbsp;dlouho jsem přemýšlela, jestli se ti ozvat. Nakonec vyhrálo přesvědčení, že bys to měl vědět a&nbsp;navíc na mě strašně tlačí Dušan. Chce tě poznat. Jo, Dušan, dala jsem mu jméno bez tebe, ale snad se ti líbí. Chtěla jsem ti celý ty roky dát vědět, že jsme dva. Bez tebe. Ale vím, že máš rodinu. Taky kvůli tomu celý tyhle tajnosti, abys neměl problémy. Včera jsem se poprvé dozvěděla, že už máš tři děti (gratuluju!), teda teď už víš, že čtyři. Asi bys chtěl vědět, jak Dušan vypadá. Už mu letos bude 21 a&nbsp;je celej ty :-) Jestli tě to zajímá a&nbsp;chceš vědět, kde Dušan „vzniknul”, napiš sem dolů slovo DUŠAN a&nbsp;objeví se ti potřebné informace. Myslím na tebe a&nbsp;doufám, že se nezlobíš. Kdysi tvoje, Petra.</Message>
            <Form value={value} _setGlobalstate={update} _handleSubmit={submit} />
        </div>
    )
};