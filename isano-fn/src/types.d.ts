interface Transaction {
  id: string;
  amount: number;
  description: string;
  type: string;
}

interface Account {
  id: string;
  name: string;
}

interface Budget {
  id: string;
  categoryId: string;
  amount: number;
}

type DefaultProps = {
  customClass?: string;
};

const customClassDefaultProps = {
  customClass: "",
} as DefaultProps;
