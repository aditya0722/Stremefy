import React from 'react';

const VideoCard = ({ thumbnail, title, views, channelName, timestamp }) => {
    return (
        <div className="flex flex-col w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-36 object-cover" src={thumbnail} alt={title} />
            <div className="p-4">
                <h4 className="text-lg font-semibold truncate">{title}</h4>
                <p className="text-sm text-gray-500 mt-2">
                     {views} views • {timestamp}
                </p>
            </div>
        </div>
    );
};

export default VideoCard;
