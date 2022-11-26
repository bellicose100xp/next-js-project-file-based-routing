import EventItem from './event-item';
import { EventType } from '../../types/eventType';

interface EventListPropType {
    items: EventType[];
}

const EventList = (props: EventListPropType) => {
    const { items } = props;
    return (
        <ul>
            {items.map((event) => <EventItem key={event.id} {...event} />)}
        </ul>
    );
};

export default EventList;