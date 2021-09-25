import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';

export const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <h1></h1>
    )
}
export default Profile;