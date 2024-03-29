interface UserIdPageProps{
    params: {
        userId:string;
    }
}

const Page =({
    params,
}: UserIdPageProps)=>{
    return(
        <div>
            User Id:{params.userId}
        </div>
    );
};


export default Page;