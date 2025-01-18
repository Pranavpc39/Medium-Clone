


export const AvatarComponent = ({name, size, textColour = "gray-300", textSize = "xs"}: {name : string, size?: string, textColour?: string, textSize?: string }) => {
    return <div className={`inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-600 rounded-full`}>
        <span className={`text-${textSize} text-${textColour}`}>{name[0]}</span>
    </div>
}