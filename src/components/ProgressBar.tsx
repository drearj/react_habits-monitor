interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    const progressStyle = {
        width: `${props.progress}%`
    }
    
    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div
                role="progressbar"
                aria-label='Progresso de hábitos completados neste dia'
                aria-valuenow={props.progress}
                aria-
                className='h-3 rounded-xl bg-violet-600'
                style={progressStyle}
                ></div>
        </div>
    );
}