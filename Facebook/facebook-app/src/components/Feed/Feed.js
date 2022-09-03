import React, {useState} from "react";
import './Feed.css';

// import StoryReel from './StoryReel/StoryReel';
// import MessageSender from './MenssageSender/MessageSender';
import Post from '.Post/Post';

const Feed = () => 
{
    const [posts, setPost] = useState([])

    return(
        <div className="feed">
            {/* <StoryReel />
            <MessegeSend /> */}

            {
              posts.map(post =>(
                <Post 
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                image={post.data.image}
                />
              )
                )  
            }
        </div>
    )
}