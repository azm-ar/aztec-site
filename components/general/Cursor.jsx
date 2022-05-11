import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorClass, setCursorClass] = useState('');
  const [cursorInnerClass, setInnerCursorClass] = useState('');

  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distX: 0,
    distY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientY, clientX, target } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - cursor2Ref.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - cursor2Ref.current.clientHeight / 2;

      cursorRef.current.style.transform = `
      translate3d(${mouseX - cursorRef.current.clientWidth * 0.01}px,
        ${mouseY - cursorRef.current.clientHeight * 0.01}px, 0)
      `;

      if (
        target.classList.contains('services__slider__img') ||
        target.classList.contains('work__slider__img')
      ) {
        setCursorClass('drag');
        setCursorText('Drag');
        setInnerCursorClass('drag');
      } else {
        setCursorClass('');
        setCursorText('');
      }
    });
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const { mouseX, mouseY, destinationX, destinationY, distX, distY } =
        positionRef.current;

      if (!destinationX | !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distX = (mouseX - destinationX) * 0.075;
        positionRef.current.distY = (mouseY - destinationY) * 0.075;

        if (
          Math.abs(positionRef.current.distX) +
            Math.abs(positionRef.current.distY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distX;
          positionRef.current.destinationY += distY;
        }
      }

      cursor2Ref.current.style.transform = `
      translate3d(
        ${destinationX}px,
        ${destinationY}px, 0
      )
      `;
    };

    followMouse();
  }, []);

  return (
    <>
      <div id='cursor' ref={cursorRef}></div>
      <div id='cursor2' ref={cursor2Ref} className={cursorClass}>
        <div className={`cursor__text ${cursorInnerClass}`}>{cursorText}</div>
      </div>
    </>
  );
}
