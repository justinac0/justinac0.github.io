import { useState } from "preact/hooks";
import type { Project } from "src/types";

type CarouselProps = {
    ProjectMeta: Array<Project>;
};

export default function Carousel({
    ProjectMeta
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((currentIndex + 1) % ProjectMeta.length);
    const prev = () => setCurrentIndex((currentIndex - 1 + ProjectMeta.length) % ProjectMeta.length);
    const set_current_index = (index: number) => setCurrentIndex(index);

    return (
        <div>
            <div class="w-[100%] flex justify-center">
                <img class="w-[95%] m-0"src={ProjectMeta[currentIndex].data.img} alt={ProjectMeta[currentIndex].data.description} />
            </div>
            <div class="flex justify-center">
                <button onClick={prev} id="prev"><b>{"<-"}</b></button>
                <div>
                    {ProjectMeta.map((_, index) => (
                        (currentIndex % ProjectMeta.length == index) && <button class={`p-2 rounded-sm ${(currentIndex == index ? "font-bold" : "")}`} onClick={() => set_current_index(index)}>{index + 1} of {ProjectMeta.length}</button>
                    ))}
                </div>
                <button onClick={next} id="next"><b>{"->"}</b></button>
            </div>
            <div class="mb-8">
                <h3>{ProjectMeta[currentIndex].data.title}</h3>
                <h4>{ProjectMeta[currentIndex].data.url && <a href={ProjectMeta[currentIndex].data.url} target="_blank">github link</a>}</h4>
                <p>{ProjectMeta[currentIndex].data.description}</p>
            </div>
        </div>
    );
}
