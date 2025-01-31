export default function HeroVideo() {
    return (
        <div className="flex justify-center">
            <video
                autoPlay
                controlsList="nodownload noplaybackrate"
                data-testid="video"
                disablePictureInPicture
                disableRemotePlayback
                loop
                muted
                playsInline
                poster="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1706049878/Homepage%20ZAP%20Jan%2024/poster-image_hero-1_jat3ne.png"
                preload="auto"
                src="https://res.cloudinary.com/zapier-media/video/upload/f_auto,q_auto/v1706042175/Homepage%20ZAP%20Jan%2024/012324_Homepage_Hero1_1920x1080_pwkvu4.mp4"
                title="Tame the chaos with Zapier"
                className="max-w-4xl"
            >
                {/* <track
                    kind="captions"
                    label="English"
                    src="blob:https://zapier.com/6047effb-67da-4393-a880-f994861fdfee"
                /> */}
            </video>
        </div>
    );
}
