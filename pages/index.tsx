import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { EventType } from '../types/eventType';

const HomePage = () => {
    const featuredEvents: EventType[] = getFeaturedEvents();

    return (
        <div>
            <ul>
                <EventList items={featuredEvents} />
            </ul>
        </div>
    );
};

export default HomePage;