import { cookies } from "next/headers";

export interface useQueryProps {
    url: string,
    method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "PATCH" | "HEAD",
    body?: string
}

export default async function useQuery({method="GET", ...props}: useQueryProps): Promise<Response> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    headers.append("Accept", 'application/json');
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if(token) {
        headers.append("Authorization", `Bearer ${token}`);
    }


    const response = await fetch(props.url, {
        method: method,
        headers: headers,
        body: props.body,
        
    });

    return response;

}