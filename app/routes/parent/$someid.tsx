import { useParams } from "remix"

export default function DynamicChild() {
    const {someid} = useParams()
    return(
        <p>This Is your id: {someid}</p>
    )
}