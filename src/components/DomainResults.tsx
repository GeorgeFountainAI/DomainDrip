import React from "react";

interface Domain {
  name: string;
  price: number;
  available: boolean;
}

interface Props {
  domains: Domain[];
  affiliateId?: string;
}

const DomainResults: React.FC<Props> = ({ domains, affiliateId }) => {
  if (!domains || domains.length === 0) {
    return <p>No domains found.</p>;
  }

  const buildUrl = (domainName: string) =>
    `https://www.spaceship.com/domains/search?query=${domainName}&aff_id=_
