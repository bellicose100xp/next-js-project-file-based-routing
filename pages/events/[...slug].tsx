import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

const FilteredEventsPage = () => {
    const router = useRouter();
    const filterQueries = router.query.slug as string[];
        
    if (!filterQueries) {
        return <p className='center'>Loading...</p>;
    }
    
    const year: string = filterQueries[0];
    const month: string = filterQueries[1];
    const filteredData = getFilteredEvents({year, month});

    if (filteredData.length == 0) {
        return (
            <h1 style={{color: 'red'}}>No Events Found! Try another year, month.</h1>
        );
    };

    return (
        <div>
            <EventList items={filteredData} />
        </div>
    );
};

export default FilteredEventsPage;