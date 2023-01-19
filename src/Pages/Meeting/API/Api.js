const LOCAL_SERVER_URL = "http://localhost:5000";
const API_BASE_URL = "https://api.videosdk.live";


export const getToken = async () => {
    try{
        const response = await fetch(`${LOCAL_SERVER_URL}/get-token`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const {token} = await response.json();
        return token;
    } catch(e){
        console.log(e);
    }
};

export const createMeeting = async ({ token }) => {
    const url = `${API_BASE_URL}/v2/rooms`;
    const options = {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
    };
  
    const { roomId } = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.error("error", error));
  
    return roomId;
  };
  
export const getMeetingId = async (token) => {
    try{
        const VIDEOSDK_API_ENDPOINT = `${LOCAL_SERVER_URL}/create-meeting`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token}),
        };
        const response = await fetch(VIDEOSDK_API_ENDPOINT, options)
        .then(async (result) => {
            const {meetingId} = await result.json();
            return meetingId;
        })
        .catch((error) => console.log("error", error));
        return response;
    }
    catch(e){
        console.log(e);
    }
}