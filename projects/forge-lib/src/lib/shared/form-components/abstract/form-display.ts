/**
 * Custom display attributes for a generic component
 */
export abstract class FormDisplay {
    /**
     * The description is text that will appear below the input field.
     */
    public description: string;

    /**
     * The label for the component
     */
    public label: string;

    /**
     * Whether to hide the label for the component
     */
    public hideLabel: boolean;

    /**
     * The tooltip for the component
     */
    public tooltip: string;

    /**
     * Whether the label should be disabled
     */
    public disabled: boolean;
}
