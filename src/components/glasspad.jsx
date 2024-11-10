export default function GlassPad({ children }) {
    return (
        <div className="h-full w-full bg-gray-400 border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] p-[12px] flex flex-row rounded-md">
            {children}
        </div>
    );
}