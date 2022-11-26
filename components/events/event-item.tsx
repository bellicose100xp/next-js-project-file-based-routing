import Link from 'next/link';
import Image from 'next/image';
import { EventType } from '../../types/eventType';

const EventItem = (props: EventType) => {
    const { id, image, title, date, location } = props;

    const humanReadableDate: string = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress: string = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li>
            <Image src={`/${image}`} alt={title} width={500} height={300} style={{height: 'auto'}} />

            <div>
                <div><h2>{title}</h2></div>
                <div><time>{humanReadableDate}</time></div>
                <div><address>{formattedAddress}</address></div>
            </div>
            <div>
                <Link href={exploreLink}>Explore Event</Link>
            </div>
        </li>
    );
};

export default EventItem;