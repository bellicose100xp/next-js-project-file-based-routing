import Image from 'next/image';
import { EventType } from '../../types/eventType';
import styles from './event-item.module.css';
import Button from '../ui/button';

import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
        <li className={styles.item}>
            {/* <Image src={`/${image}`} alt={title} width={500} height={300} className={styles.item_img} /> */}

            <div className={styles.item_img}>
                <Image src={`/${image}`} alt={title} fill={true} style={{ objectFit: 'cover' }} />
            </div>

            <div className={styles.content}>
                <div className={styles.summary}><h2>{title}</h2></div>
                <div className={styles.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <div className={styles.address}><address>{formattedAddress}</address></div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;