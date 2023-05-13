import { ref } from "vue";

export default function () {
  let transactions = ref([]);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (response.ok) {
        transactions.value = await response.json();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };

  return { transactions, error, fetchData };
}
