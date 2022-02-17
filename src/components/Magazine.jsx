import '../App.scss';
import Card from './ui/Card';

function Magazine() {
    return (
        <div className="magazine">
            <div className="slide">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Magazine;