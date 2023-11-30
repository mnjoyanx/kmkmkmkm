import { Typography } from "antd";

const { Text } = Typography;

export default function TableText({ text = "", style = { width: 100 } }) {
    return (
        <Text style={style} ellipsis={{ tooltip: text }}>
            {text}
        </Text>
    );
}
