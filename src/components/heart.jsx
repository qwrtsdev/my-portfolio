"use client"

import { useEffect, useState } from "react";
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Heart() {
    // states for checking if user have click on it
    const [heartStatus, setHeartStatus] = useState(false)

    // initialize the state once the component mounted (page loaded)
    useEffect(() => {
        setHeartStatus(false);
    }, []);

    // change button's state when being clicked
    const handleClick = () => {
        if (heartStatus == true) {
            setHeartStatus(false);
        } else {
            setHeartStatus(true);
        }
    }

    return (
        <>
            <button
                className={clsx(
                    "text-2xl",
                    {
                        "text-gray-500": heartStatus == false,
                        "text-red-500": heartStatus == true,
                    }
                )}
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faHeart} />
            </button>
        </>
    )
}