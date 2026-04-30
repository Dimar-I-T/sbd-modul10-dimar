import ItemsComponent from "../components/items/ItemsComponent";
import getUser from "@/utils/user-session";

export default async function Items() {
    const user = await getUser(); 
    return (
        <ItemsComponent user={user} />
    )
}