import React, { useEffect } from "react";
import AddProfile from "./AddProfile";
import { useDispatch } from "react-redux";
import { startListProfile } from "../actions/profileAction";
import ListProfileData from "./ListProfileData";

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startListProfile())
    }, [dispatch])
    return (
        <div>
            <AddProfile />
            <ListProfileData />
        </div>

    )
}

export default Profile