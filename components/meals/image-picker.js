'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();

    const inputRef = useRef();

    function handlePickClick() {
        inputRef.current.click();
    }

    function handleImageChanged(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(() => null);
        } else {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPickedImage(() => fileReader.result);
            };

            fileReader.readAsDataURL(file);
        }
    }

    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && <Image src={pickedImage} alt="Image picked by user" fill></Image>}
            </div>
            <input
                className={classes.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={inputRef}
                onChange={handleImageChanged}
                required
            ></input>
            <button type='button' className={classes.button} onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
}