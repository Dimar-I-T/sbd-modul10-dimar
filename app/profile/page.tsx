import getUser from "@/utils/user-session";
import ProfileComponent from "../components/profile/ProfileComponent";

export default async function Profile() {
    const user = await getUser();
    return (
        <ProfileComponent user={user}/>
    )
}