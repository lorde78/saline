export default function useGetCurrentUserRoles(currentUser:string) {
    return JSON.parse(atob(currentUser.split('.')[1])).userRoles
}