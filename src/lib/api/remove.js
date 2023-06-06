import client from "./client";

export const memberRemove = ({id}) => client.delete('/api/members/{id}');