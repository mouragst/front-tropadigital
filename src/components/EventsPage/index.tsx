import React from 'react';
import Table from '../Table';

const eventData = Array.from({ length: 6 }).map((_, idx) => ({
    id: idx + 1,
    name: 'Clube do Laço Coração Pantaneiro',
    teams: 10,
    status: 'Ativo',
    date: '09 a 11 de Junho'
}));

const EventsPage: React.FC = () => {

    return (
        <Table
            title="Eventos"
            columns={[
                { key: 'name', label: 'Nome do evento' },
                { key: 'teams', label: 'Total de equipes' },
                { key: 'status', label: 'Status' },
                { key: 'date', label: 'Data' }
            ]}
            data={eventData}
            itemsPerPage={2}
            onInsert={() => console.log('Inserir Evento')}
            onSearch={(value) => console.log('Buscar:', value)}
        />
    )
};

export default EventsPage;