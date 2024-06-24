import React, {FC, useEffect, useState} from 'react';
import {imageService} from "../../services/image.service";
import {Badge} from "@mui/material";
import {IGenreModel} from "../../interfaces/IGenreModel";

interface IProps {
    path: string,
    size: number,
    lang: string,
    genres?: IGenreModel[]
}

const PosterPreviewComponent: FC<IProps> = ({path, size, lang, genres}) => {
    const [imagePath, setImagePath] = useState<string>("")

    useEffect(() => {
        imageService.getPosterImage(size).then(myImagePath => {
            setImagePath(myImagePath)
        })
    }, []);

    const image = imagePath + path;

    if (!genres) {
        return (
            <div>
                <Badge color='success' badgeContent={lang}>
                    <img src={image} alt="Poster"/>
                </Badge>
            </div>
        )
    }

    const genresInRow = genres.map(genre => genre.name).join(', ');

    return (
        <div>
            <Badge color='secondary' badgeContent={genresInRow} anchorOrigin={{vertical: 'top', horizontal: 'left',}}>
                <Badge color='success' badgeContent={lang}>
                    <img src={image} alt="Poster"/>
                </Badge>
            </Badge>
        </div>
    );
};

export default PosterPreviewComponent;