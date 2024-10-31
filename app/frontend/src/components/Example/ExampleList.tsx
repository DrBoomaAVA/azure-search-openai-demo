import { Example } from "./Example";
import { useTranslation } from "react-i18next";

import styles from "./Example.module.css";

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
    selectedCategory?: string; // Add a prop to select category
}

export const ExampleList = ({ onExampleClicked, useGPT4V, selectedCategory }: Props) => {
    const { t } = useTranslation();

    // Define the categories and their respective examples
    const categories: { [key: string]: string[] } = {
        loanAdvisory: [
            t("exampleQuestions.loanAdvisory.1"),
            t("exampleQuestions.loanAdvisory.2"),
            t("exampleQuestions.loanAdvisory.3"),
        ],
        taxAdvisory: [
            t("exampleQuestions.taxAdvisory.1"),
            t("exampleQuestions.taxAdvisory.2"),
            t("exampleQuestions.taxAdvisory.3"),
        ],
    };

    const DEFAULT_EXAMPLES: string[] = [t("defaultExamples.1"), t("defaultExamples.2"), t("defaultExamples.3")];
    const GPT4V_EXAMPLES: string[] = [t("gpt4vExamples.1"), t("gpt4vExamples.2"), t("gpt4vExamples.3")];

    // Get examples based on selected category or default examples
    const examples = selectedCategory ? categories[selectedCategory] : (useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES);

    return (
        <ul className={styles.examplesNavList}>
            {examples.length > 0 ? (
                examples.map((question, i) => (
                    <li key={i}>
                        <Example text={question} value={question} onClick={onExampleClicked} />
                    </li>
                ))
            ) : (
                <li>{t("No examples available for this category.")}</li>
            )}
        </ul>
    );
};
