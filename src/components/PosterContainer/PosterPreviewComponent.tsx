import React, {FC, useEffect, useState} from 'react';
import {imageService} from "../../services/image.service";

interface IProps {
    path: string,
    size: number
}

const PosterPreviewComponent: FC<IProps> = ({path, size}) => {
    const [imagePath, setImagePath] = useState<string>("")

    useEffect(() => {
        imageService.getPosterImage(size).then(myImagePath => {
            setImagePath(myImagePath)
        })
    }, []);

    const image = imagePath + path;

    return (
        <div>
            <img src={image} alt="image"/><br/>
        </div>
    );
};

export default PosterPreviewComponent;