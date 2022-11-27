import EventItem from './event-item';
import { EventType } from '../../types/eventType';
import styles from './event-list.module.css';

interface EventListPropType {
    items: EventType[];
}

const EventList = (props: EventListPropType) => {
    const { items } = props;
    return (
        <ul className={styles.list}>
            {items.map((event) => <EventItem key={event.id} {...event} />)}
        </ul>
    );
};

export default EventList;