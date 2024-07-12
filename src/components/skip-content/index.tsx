import { Button } from "@nextui-org/react"
import { HashLink as Link } from 'react-router-hash-link';

const SkipToContent = () => {
    return (
        <>
            <Button
                className="absolute -translate-y-40 z-50 translate-x-40 focus-within:translate-y-0 transition-all ease-in duration-300 font-semibold"
                to="#main-content"
                as={Link}
                color="primary"
                variant="solid"
                radius="full"
            >
                Skip To Content
            </Button>
        </>
    )
}

export default SkipToContent