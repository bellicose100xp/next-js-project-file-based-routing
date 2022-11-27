import {useRouter} from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEventsPage = () => {

    const allEvents = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year: string, month: string): void => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </div>
    );
};

export default AllEventsPage;