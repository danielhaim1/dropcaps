# dropcaps
Simple drop caps that are accessible and responsive

### Example
Input:
```html
<p data-dropcap>Before the invention of typography, pages of books, or anything of a broadside nature, were printed from woodcuts, i.e.</p>
```

Output:
```html
<p data-dropcap>
    <span class="dropcap" role="text">
        <span aria-hidden="true">
        <span class="dropcap-letter dropcap-letter-b">B</span>efore</span>
        <span class="sr-only">Before</span>
    </span> the invention of&nbsp;typography, pages of books, or anything of a broadside nature, were printed from woodcuts, i.e.
</p>
```
