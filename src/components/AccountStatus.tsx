interface Props {
  name?: string;
}

const AccountStatus = ({ name }: Props) => (
  <div>{name ? `Hi, ${name}!` : "Not logged in"}</div>
);

export default AccountStatus;
