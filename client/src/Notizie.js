import { useState, useEffect } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const cardStyle = {color: "#97fb57", backgroundColor: "#151515", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}

function Notizie(props) {
    const [notizie, setNotizie] = useState(false);
    useEffect(() => {
		const getNotizie = async () => {
            const n = [
                {t: "È morto freddy!", id: 0, data: "05/06/2021"},
                {t: "Zack è di nuovo infortunato", id: 0, data: "05/06/2021"},
                {t: "Allerta meteo", id: 0, data: "05/06/2021"},
                {t: "Allenamento 15:30", id: 0, data: "05/06/2021"},
                {t: "È lentooo!", id: 0, data: "05/06/2021"}]//await API.getNotizie();
                setNotizie(n);
		};
		getNotizie().catch((err) => console.log(err));
	}, []);
    return(
        !notizie ? <Spinner/> :
        <Container>
            {notizie.map(n =>
                <Link to={"/Articolo/"+n.id}>
                    <Card className="mt-3" style={cardStyle}>
                        <h4 className="m-2"><u>{n.t}</u></h4>
                        <t align="right" className="mr-1">{n.data}</t>
                    </Card>
                </Link>
            )}
        </Container>
    );
}

export default Notizie;