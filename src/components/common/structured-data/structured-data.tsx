import React from "react"

interface StructuredDataProps {
  data: Record<string, unknown>
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
  <script type="application/ld+json">
    {JSON.stringify(data).replace(/</g, "\\u003c")}
  </script>
)

export default StructuredData
