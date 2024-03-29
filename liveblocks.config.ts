import { 
    createClient,
    LiveList,
    LiveMap,
    LiveObject,
  } from "@liveblocks/client";
  import { createRoomContext } from "@liveblocks/react";
  
  import { Layer, Color } from "@/types/canvas";
    
  const client = createClient({
    throttle: 16,
    authEndpoint: "/api/liveblocks-auth",
    resolveUsers: async ({ userIds }) => {
      // Used only for Comments. Return a list of user information retrieved
      // from `userIds`. This info is used in comments, mentions etc.
      
      // const usersData = await __fetchUsersFromDB__(userIds);
      // 
      // return usersData.map((userData) => ({
      //   name: userData.name,
      //   avatar: userData.avatar.src,
      // }));
      
      return [];
    },
  });
  
  // Presence, Storage, UserMeta, RoomEvent, and ThreadMetadata types remain the same
  
  export const {
    suspense: {
      RoomProvider,
      useRoom,
      useMyPresence,
      useUpdateMyPresence,
      useSelf,
      useOthers,
      useOthersMapped,
      useOthersConnectionIds,
      useOther,
      useBroadcastEvent,
      useEventListener,
      useErrorListener,
      useStorage,
      useObject,
      useMap,
      useList,
      useBatch,
      useHistory,
      useUndo,
      useRedo,
      useCanUndo,
      useCanRedo,
      useMutation,
      useStatus,
      useLostConnectionListener,
      useThreads,
      useUser,
      useCreateThread,
      useEditThreadMetadata,
      useCreateComment,
      useEditComment,
      useDeleteComment,
      useAddReaction,
      useRemoveReaction,
    }
  } = createRoomContext(client);
  