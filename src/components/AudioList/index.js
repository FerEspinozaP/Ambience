import './style.css'

const AudioList = ({
    onBackButtonPress
}) => {
    return (
        <div className="audio-ls m-16">
            <div onClick={onBackButtonPress} className="audio-ls-header">
                <i class="ph-caret-left"></i>
            </div>

            <ul>
                <li className="audio-ls-container mtb-16">
                    <div className="audio-ls-item flex align-center ptb-8">
                        <div className="audio-img">
                            <img />
                        </div>
                    </div>
                    <div className="audio-info mlr-8">
                        <strong>Higher Power</strong>
                        <p>Coldplay</p>
                    </div>

                    <div className="audio-ls-item flex align-center ptb-8">
                        <div className="audio-img">
                            <img />
                        </div>
                    </div>
                    <div className="audio-info mlr-8">
                        <strong>Higher Power</strong>
                        <p>Coldplay</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AudioList;
