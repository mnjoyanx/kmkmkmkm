import { Button } from "antd";

import { ClearOutlined } from "@ant-design/icons";

export default function TableResetButton({ onClick = () => {} }) {
    return (
        <Button icon={<ClearOutlined />} onClick={onClick}>
            Reset
        </Button>
    );
}
