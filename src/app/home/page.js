import CriarPost from "@/components/CriarPost";
import PostText from "@/components/PostText";

export default function Home() {
    return (
        <div className="grid grid-cols-3 mt-3">
            <div className="flex flex-col col-start-2 gap-4">
                <h1 className="text-3xl font-medium">Olá Fulano! </h1>
                <CriarPost />
                <PostText />
            </div>
        </div>
    )
}