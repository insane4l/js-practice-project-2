const pictureSizes = () => {
    const blocks = document.querySelectorAll('.sizes-block');

    blocks.forEach( block => {
        block.addEventListener('mouseover', (e) => {
            showPicture(block);
            // togglePicture(block, e.type);
        });
        block.addEventListener('mouseout', (e) => {
            hidePicture(block);
            // togglePicture(block, e.type);
        });
    });


    function showPicture(block) {
        const picture = block.querySelector('img'),
              blockText = block.querySelectorAll('p:not(.sizes-hit)');

        picture.src = picture.src.slice(0, -4) + '-1.png';
        blockText.forEach( el => el.style.display = 'none' );
    }

    function hidePicture(block) {
        const picture = block.querySelector('img'),
              blockText = block.querySelectorAll('p:not(.sizes-hit)');

        picture.src = picture.src.slice(0, -6) + '.png';
        blockText.forEach( el => el.style.display = 'block' );
    }

    // function togglePicture(block, event) {
    //     const picture = block.querySelector('img'),
    //           blockText = block.querySelectorAll('p:not(.sizes-hit)');

    //     let textDisplay = 'block';

    //     if (event === 'mouseover') {
    //         picture.src = picture.src.slice(0, -4) + '-1.png';
    //         textDisplay = 'none';
    //     } else {
    //         picture.src = picture.src.slice(0, -6) + '.png';
    //     }

    //     blockText.forEach( el => el.style.display = textDisplay );
    // }

};

export default pictureSizes;